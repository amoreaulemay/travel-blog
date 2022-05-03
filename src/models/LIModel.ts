import { v4 as uuid } from "uuid";

export interface LIModelProps {
    imageSrc: URL | string;
    country: string;
    title: string;
    startDate?: Date;
    endDate?: Date;
    description: string;
}

export default class LIModel {
    private _imageSrc: URL | string;
    private _country: string;
    private _title: string;
    private _startDate: Date;
    private _endDate: Date;
    private _description: string;
    private _id: string = uuid();

    public constructor(props: LIModelProps) {
        this._imageSrc = props.imageSrc;
        this._country = props.country;
        this._title = props.title;
        this._description = props.description;

        this._startDate = props.startDate ?? new Date();
        this._endDate = props.endDate ?? new Date();
    }

    public get mapLink(): string {
        const mapUrl = new URL("https://www.google.com/maps/search/");

        mapUrl.searchParams.append("api", "1");
        mapUrl.searchParams.append("query", this._title);

        return mapUrl.href;
    }

    public get dates(): string {
        return `${this._startDate.toLocaleString('default', { day: '2-digit', month: 'short', year: 'numeric' })} - ${this._endDate.toLocaleString('default', { day: '2-digit', month: 'short', year: 'numeric' })}`;
    }

    public get imageSrc(): string {
        if (typeof this._imageSrc === 'string') {
            return this._imageSrc;
        }

        return this._imageSrc.href;
    }

    public get country(): string {
        return this._country;
    }

    public get description(): string {
        return this._description;
    }

    public get title(): string {
        return this._title;
    }

    public get id(): string {
        return this._id;
    }

    public get endDate(): Date {
        return this._endDate;
    }
}