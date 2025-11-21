import EnvironmentalProtection from "../EnvironmentalProtection/EnvironmentalProtection";
import EnvironmentHealthSafetyFront from "../EnvironmentHealthSafetyFront/EnvironmentHealthSafetyFront";
import HealthHygiene from "../HealthHygiene/HealthHygiene";
import Safety from "../Safety/Safety";
import ChutiAronnobash from "./ChutiAronnobash/ChutiAronnobash";
import ChutiAronnobashSecond from "./ChutiAronnobash/ChutiAronnobashSecond";
import ChutiAronnobashThird from "./ChutiAronnobash/ChutiAronnobashThird";
import ChutiPurbacal from "./ChutiPurbacal/ChutiPurbacal";
import ChutiPurbacalSecond from "./ChutiPurbacal/ChutiPurbacalSecond";
import ChutiPurbacalThird from "./ChutiPurbacal/ChutiPurbacalThird";
import SaltanaTeaResortSecond from "./SaltanatTeaResort/SaltanaTeaResortSecond";
import SaltanatTeaResort from "./SaltanatTeaResort/SaltanatTeaResort";
import SaltanatTeaResortThird from "./SaltanatTeaResort/SaltanatTeaResortThird";

const EnvironmentHealthSafety = () => {
    return (
        <div>
            <EnvironmentHealthSafetyFront></EnvironmentHealthSafetyFront>
            <EnvironmentalProtection></EnvironmentalProtection>
            <HealthHygiene></HealthHygiene>
            <Safety></Safety>
            <ChutiAronnobash></ChutiAronnobash>
            <ChutiAronnobashSecond></ChutiAronnobashSecond>
            <ChutiAronnobashThird></ChutiAronnobashThird>
            <ChutiPurbacal></ChutiPurbacal>
            <ChutiPurbacalSecond></ChutiPurbacalSecond>
            <ChutiPurbacalThird></ChutiPurbacalThird>
            <SaltanatTeaResort></SaltanatTeaResort>
            {/* <SaltanaTeaResortSecond></SaltanaTeaResortSecond> */}
            <SaltanatTeaResortThird></SaltanatTeaResortThird>
        </div>
    );
};

export default EnvironmentHealthSafety;