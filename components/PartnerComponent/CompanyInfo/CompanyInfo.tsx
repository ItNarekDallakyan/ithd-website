import {FC, useContext} from "react";
import {LocalizationsContext} from "@core/context";
import cs from "classnames";
import InfoItem from "@components/PartnerComponent/CompanyInfo/InfoItem";
import CompanyCard from "@components/PartnerComponent/CompanyInfo/CompanyCard";
import {useMainSelector} from "@store/selectors";

interface CompanyInfoModel {
    className?: string
}

export const CompanyInfo: FC<CompanyInfoModel> = ({className}) => {

    let {currentLanguage} = useMainSelector();
    let {localizations} = useContext(LocalizationsContext);

    const {
        address
    } = localizations[currentLanguage].partner;

    return (
        <div className={cs({
            [className as string]: className
        })}>
            <CompanyCard />
            <InfoItem
                className={"px-5 mt-8"}
                label={address.labelUAE}
                value={address.valueUAE}
            />
            <InfoItem
                className={"px-5 mt-8"}
                label={address.labelUS}
                value={address.valueUS}
            />
            <InfoItem
                className={"px-5 mt-8"}
                label={address.labelAM}
                value={address.valueAM}
            />
        </div>
    )
}