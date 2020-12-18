import {Module} from "@nestjs/common";
import {PersistenceModule} from "../persistence/persistence.module";

const managers = [];
const queries = [];


@Module({
    imports: [PersistenceModule],
    providers:[...managers, ...queries],
    exports: [...managers, ...queries]
})
export class DomainModule {

}
