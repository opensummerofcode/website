import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Project } from './types/project.type';
import { ProjectService } from './project.service';
import { NewProjectInput } from './inputs/new.project.input';
import { UpdateProjectInput } from './inputs/update.project.input';

@Resolver('Project')
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
}
