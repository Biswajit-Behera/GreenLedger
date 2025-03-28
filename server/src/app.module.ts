import { Module } from '@nestjs/common';
import { StationModule } from './station/station.module';
import { OrganisationModule } from './organisation/organisation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { MeasurementsModule } from './measurements/measurements.module';
import { Measurement } from './measurements/entities/measurement.entity';
import { Organisation } from './organisation/entities/organisation.entity';
import { Station } from './station/entities/station.entity';
import { Country } from './station/entities/country.entity';
import { Region } from './station/entities/region.entity';
import { ConfigModule } from '@nestjs/config';
import { NftModule } from "./nft/nft.module";
import { DeployModule } from './deploy/deploy.module';
import { NearModule } from "./near/near.module";
import { ScheduleModule } from "@nestjs/schedule";
import { TasksModule } from "./tasks/tasks.module";
import { MarketModule } from './market/market.module';

@Module({
    imports: [
        ScheduleModule.forRoot(),
        ConfigModule.forRoot({ isGlobal: true }),
        NearModule,
        TypeOrmModule.forRoot(typeOrmConfig),
        TypeOrmModule.forFeature([Organisation, Station, Country, Region, Measurement]),
        StationModule,
        DeployModule,
        NftModule,
        OrganisationModule,
        MeasurementsModule,
        MarketModule,
        TasksModule,
    ],
})
export class AppModule {}
