import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModelsModule } from '@cockpit/api/models';
import { ActivitiesControllersModule } from '@cockpit/api/activities-controllers';
import { ApiAdminUsersControllersModule } from '@cockpit/api-admin-users-controllers';
import { ApiUsersModule } from '@cockpit/api-users';
import { ApiControllersActivityTypesModule } from '@cockpit/api-controllers-activity-types';
import { ApiControllersAdminActivityTypesModule } from '@cockpit/api-controllers-admin-activity-types';
import { ApiControllersAuthenticationModule } from '@cockpit/api-controllers-authentication';
import { JwtModule } from '@nestjs/jwt';
import { JWT_CONSTANTS } from '@cockpit/api-util-constants';
import { ApiGuardAuthenticationModule } from '@cockpit/api-guard-authentication';

@Module({
  imports: [
    ApiModelsModule,
    ActivitiesControllersModule,
    ApiAdminUsersControllersModule,
    ApiUsersModule,
    ApiControllersActivityTypesModule,
    ApiControllersAdminActivityTypesModule,
    ApiControllersAuthenticationModule,
    ApiGuardAuthenticationModule,
    JwtModule.register({
      global: true,
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: '31d' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
