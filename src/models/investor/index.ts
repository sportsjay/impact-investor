interface InvestorProps {
  id: string;
  name: string;
  HQ: string;
  about: string;
  category: string;
  series: string[];
  impactAreas: string[];
  targetRegions: string[];
  website: string;
}

export interface FilterProps {
  id: string;
  title: string;
  filters: string[];
}

export class Investor {
  [x: string]: any;
  public id: string;
  public name: string;
  public HQ: string;
  public about: string;
  public category: string;
  public series: string[];
  public impactAreas: string[];
  public targetRegions: string[];
  public website: string;
  constructor({ ...props }: InvestorProps) {
    this.id = props.id;
    this.name = props.name;
    this.HQ = props.HQ;
    this.about = props.about;
    this.category = props.category;
    this.series = props.series;
    this.impactAreas = props.impactAreas;
    this.targetRegions = props.targetRegions;
    this.website = props.website;
  }

  public generateFilterArray(): FilterProps[] {
    return Object.keys(this).map<FilterProps>((key: string, idx: number) => {
      const filters = Array.isArray(this[key]) ? [...this[key]] : [this[key]];
      return {
        id: idx.toString(),
        title: key,
        filters: filters,
      };
    });
  }
}
