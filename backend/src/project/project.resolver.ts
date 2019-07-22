import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';
import { Project } from './types/project.type';
import { ProjectService } from './project.service';
import { NewProjectInput } from './inputs/new.project.input';
import { UpdateProjectInput } from './inputs/update.project.input';

@Resolver(of => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query(returns => [Project], { nullable: true })
  projects(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Mutation(returns => Project)
  addProject(@Args('input') input: NewProjectInput): Promise<Project> {
    return this.projectService.create(input);
  }

  @Mutation(returns => Project)
  updateProject(
    @Args('projectId') projectId: string,
    @Args('input') input: UpdateProjectInput,
  ): Promise<Project> {
    return this.projectService.update({ projectId, update: input });
  }

  @Mutation(returns => Project)
  addParticipantToProject(
    @Args('projectId') projectId: string,
    @Args('participantId') participantId: string,
  ): Promise<Project> {
    return this.projectService.addParticipant(projectId, participantId);
  }

  @Mutation(returns => Project)
  addPartnerToProject(
    @Args('projectId') projectId: string,
    @Args('partnerId') partnerId: string,
  ): Promise<Project> {
    return this.projectService.addPartner(projectId, partnerId);
  }

  @Mutation(returns => Project)
  bind(
    @Args('projectId1') projectId1: string,
    @Args('projectId2') projectId2: string,
  ): Promise<Project> {
    return this.projectService.bind(projectId1, projectId2);
  }

  @Mutation(returns => Project)
  unbind(
    @Args('projectId1') projectId1: string,
    @Args('projectId2') projectId2: string,
  ): Promise<Project> {
    return this.projectService.unbind(projectId1, projectId2);
  }

  @ResolveProperty()
  linkedTo(@Parent() project) {
    return this.projectService.bonds(project);
  }

  @ResolveProperty()
  team(@Parent() project) {
    return this.projectService.team(project);
  }

  @ResolveProperty()
  partners(@Parent() project) {
    return this.projectService.partners(project);
  }
}
