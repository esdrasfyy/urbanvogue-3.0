import { Global, Module } from '@nestjs/common';
import * as ImportRepository from './index';
const repositories = Object.values(ImportRepository);

@Global()
@Module({
  providers: [...repositories],
  exports: repositories,
})
export class RepositoryModule {}
