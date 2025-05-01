import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
  ],
  controllers: [],
  providers: [Logger],
})
export class AppModule {}
