import {LANGUAGES} from "@models/enums";
import {TermModel} from "@models/interfaces";
import {LOCALIZATIONS} from "@common/database/localizations";

export interface LocalizationsModel {
    [LANGUAGES.EN]: typeof LOCALIZATIONS
}