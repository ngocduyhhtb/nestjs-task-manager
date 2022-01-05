import { TypeOrmModuleOptions } from "@nestjs/typeorm";

let typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: "root",
  password: "123456",
  database: 'task_management',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
export default typeOrmConfig;