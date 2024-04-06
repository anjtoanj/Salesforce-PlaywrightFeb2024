import { Environment } from "../constants/envConstants"
import appData  from "../testData/appData.json"

export type AppTestData = {
    adminUserName: string,
    adminPassword: string
}

export class FrameWorkUtil{

    static loadAppTestData(envName: Environment):AppTestData{
        return appData[envName]
    }
}