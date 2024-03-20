import { Module } from '@nestjs/common';
import { ActivitiesController } from './activities.controller';
import { ActivitiesDataAccessModule } from '@cockpit/activities-data-access';

@Module({
  imports: [ActivitiesDataAccessModule],
  controllers: [ActivitiesController],
  providers: [],
  exports: [],
})
export class ActivitiesControllersModule {}