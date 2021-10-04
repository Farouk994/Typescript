///<reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { Account } from "./Account";
import { CustomMap } from "./CustomMap";

const user = new User();
const account = new Account();
const custonMap = new CustomMap("map");
// custonMap.addUserMarker(user);

const customAcc = new CustomMap("map");
customAcc.addAccountMarker(account);
