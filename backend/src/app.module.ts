import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { StudentModule } from './participant/participant.module';
import { FileModule } from './file/file.module';
import { PartnerModule } from './partner/partner.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_URI'),
        dbName: config.get('DB_NAME'),
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }),
      inject: [ConfigService],
    }),
    StudentModule,
    FileModule,
    PartnerModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
