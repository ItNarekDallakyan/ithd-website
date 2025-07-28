import {FC} from "react";
import styles from "./Loader.module.scss";
import cs from "classnames";

interface LoaderModel {
    className?: string
}

export const Loader: FC<LoaderModel> = ({ className }) => (
    <div className={cs({
        [className as string]: className,
        [styles.Loader]: true
    })}>
        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_3897_24827)">
                <path d="M8.09969 23.4298C6.20766 22.714 4.5464 21.4911 3.29589 19.8934C2.04538 18.2957 1.25329 16.3843 1.00545 14.3662C0.757613 12.3481 1.06346 10.3003 1.88987 8.44454C2.71629 6.58879 4.03173 4.99592 5.69373 3.83845C7.35571 2.68101 9.30087 2.00311 11.3185 1.87822C13.3361 1.75332 15.3492 2.18619 17.1397 3.12993C18.9302 4.07366 20.4298 5.49228 21.4762 7.2321C22.5226 8.97191 23.0757 10.9666 23.0757 13" stroke="white" strokeWidth="2"/>
            </g>
            <defs>
                <clipPath id="clip0_3897_24827">
                    <rect width="24" height="26" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    </div>
)