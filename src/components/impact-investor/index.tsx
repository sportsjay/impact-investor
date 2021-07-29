import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Theme,
  TextField,
  Chip,
  IconButton,
} from "@material-ui/core";
import {
  ArrowDropDown,
  ArrowDropUp,
  ColorizeSharp,
  Filter,
  Search,
} from "@material-ui/icons";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";

// import components
import { HeaderText, Text } from "../common/typography";

// import styles
import { ColorPalette } from "../common/styles/colors";

// import test data
import { data } from "../../sample-data.json";
import { FilterProps, Investor } from "../../models/investor";

interface SelectedFilter {
  title: string;
  filter: string;
}

export default function ImpactInvestorPage() {
  const investorPageClasses: ClassNameMap = investorPageStyles();

  // state
  const _selectedFilters: string[] = [];
  const [selectedFilters, setSelectedFilter] = useState(_selectedFilters);

  const _filters: FilterProps[] = [];
  const [filters, setFilters] = useState(_filters);

  const _searchFilter: string = "";
  const [searchFilter, setSearchFilter] = useState(_searchFilter);

  const _investors: Investor[] = [];
  const [investors, setInvestors] = useState(_investors);
  const [originalInvestors, setOriginalInvestors] = useState(_investors);

  const [selectedInvestor, setSelectedInvestor] = useState<Investor>();

  const nonFilters = new Set(["about", "website", "id"]);

  // functions
  function initData() {
    let investorList: Investor[] = [];
    const transformToFilter: FilterProps[] = data
      .map<FilterProps[]>((item) => {
        const newInvestor: Investor = new Investor({
          id: item.id.toString(),
          HQ: item.HQ,
          name: item.name,
          series: item.series,
          impactAreas: item["impact-areas"],
          targetRegions: item["target-region"],
          website: item.website,
          about: item.about,
          category: item.category,
        });
        investorList.push(newInvestor);
        return newInvestor.generateFilterArray();
      })
      .reduce((state, curr) => {
        return state.map((filterKey, idx) => ({
          id: filterKey.id,
          title: filterKey.title,
          filters: Array.from(
            new Set([...filterKey.filters, ...curr[idx].filters])
          ),
        }));
      });
    setInvestors(investorList);
    setOriginalInvestors(investorList);
    setFilters(transformToFilter);
  }

  function onAddSelectFilter(filter: SelectedFilter) {
    let temp = new Set([...selectedFilters]);
    const stringifiedFilter: string = JSON.stringify(filter);
    if (!temp.has(stringifiedFilter)) temp.add(stringifiedFilter);
    setSelectedFilter(Array.from(temp));
  }

  function onRemoveSelectFilter(filter: SelectedFilter) {
    let temp = new Set([...selectedFilters]);
    const stringifiedFilter: string = JSON.stringify(filter);
    temp.delete(stringifiedFilter);
    setSelectedFilter(Array.from(temp));
  }

  function onSubmitSearchFilter() {
    setInvestors(
      originalInvestors.reduce<Investor[] | []>((state, curr) => {
        if (curr.name.toLowerCase().includes(searchFilter.toLowerCase()))
          return (state = [...state, curr]);
        else return state;
      }, [])
    );
  }

  function onSearchFilter(value: string) {
    setSearchFilter(value);
  }

  function onSubmitFilter() {
    if (selectedFilters.length === 0) setInvestors(originalInvestors);
    else {
      const filteredInvestors = originalInvestors.reduce<Investor[] | []>(
        (state, curr) => {
          let current: Set<string> = new Set(
            Object.keys(curr).flatMap((key) => curr[key])
          );
          let isInFilter = false;
          for (const selectedFilter of selectedFilters) {
            const parsedSelectedFilter = JSON.parse(selectedFilter).filter;
            if (current.has(parsedSelectedFilter)) isInFilter = true;
          }
          if (isInFilter) return (state = [...state, curr]);
          else return state;
        },
        []
      );
      setInvestors(filteredInvestors);
    }
  }

  function onSelectInvestor(model: Investor) {
    setSelectedInvestor(model);
  }

  function getBack() {
    setSelectedInvestor(undefined);
  }

  useEffect(() => {
    initData();
  }, []);

  return (
    <>
      {selectedInvestor === undefined ? (
        <div className={investorPageClasses.root}>
          <div className={investorPageClasses.searchBarContainer}>
            <TextField
              className={investorPageClasses.searchBar}
              variant="outlined"
              placeholder="Search for Impact Investors..."
              onChange={(e) => onSearchFilter(e.target.value)}
            />
            <div className={investorPageClasses.searchBarButton}>
              <IconButton
                onClick={onSubmitSearchFilter}
                style={{ backgroundColor: ColorPalette.blue1 }}
              >
                <Search style={{ color: ColorPalette.white }} />
              </IconButton>
            </div>
          </div>
          <div className={investorPageClasses.filterHeader}>
            <HeaderText>Filter By: </HeaderText>
            {selectedFilters.map((selectedFilter: string) => {
              const parsedSelectedFilter: SelectedFilter =
                JSON.parse(selectedFilter);
              return (
                <Chip
                  label={parsedSelectedFilter.filter}
                  onDelete={() => onRemoveSelectFilter(parsedSelectedFilter)}
                />
              );
            })}
            <Chip
              icon={<Search />}
              label="Apply Filter"
              color="primary"
              onClick={onSubmitFilter}
            />
          </div>
          <section className={investorPageClasses.filterContainer}>
            {filters.map((filter: FilterDropDownProps) =>
              !nonFilters.has(filter.title) ? (
                <FilterDropDown
                  {...filter}
                  onAddFilterFunction={onAddSelectFilter}
                />
              ) : (
                <></>
              )
            )}
          </section>
          <div style={{ marginBottom: 10 }}>
            <HeaderText>Results: </HeaderText>
          </div>
          <div className={investorPageClasses.investorContainer}>
            {investors.map((investor: Investor) => (
              <InvestorCard
                model={investor}
                onClick={() => onSelectInvestor(investor)}
              />
            ))}
          </div>
        </div>
      ) : (
        <InvestorDataPage model={selectedInvestor} getBack={getBack} />
      )}
    </>
  );
}

const investorPageStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    boxSizing: "border-box",
  },
  searchBarContainer: {
    marginBottom: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  searchBarButton: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    minWidth: "max-content",
  },
  searchBar: {
    width: "100%",
    flex: 10,
  },
  filterHeader: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: theme.spacing(2),
  },
  filterContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  investorContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(4),
  },
}));

interface InvestorDataPageProps {
  model: Investor;
  getBack: VoidFunction;
}

function InvestorDataPage(props: InvestorDataPageProps) {
  const classes = investorDataPageStyles();

  // properties
  const model: Investor = props.model;
  const getBack: VoidFunction = props.getBack;

  // states
  const [transformedData, setTransformedData] = useState<string[][]>();

  // functions
  function initData() {
    const transformedKey: string[][] = Object.keys(model).map((key: string) => [
      key.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase(),
      Array.isArray(model[key]) ? model[key].join(", ") : model[key],
    ]);
    setTransformedData(transformedKey);
  }

  useEffect(() => {
    initData();
  }, []);

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Text
          onClick={getBack}
          style={{ fontWeight: 700, cursor: "pointer", marginBottom: 10 }}
        >
          {"<<<"} Back to Impact Investor Menu
        </Text>
        <HeaderText>
          Investor Profile, <span>{model.name}</span>
        </HeaderText>
      </header>
      <div className={classes.content}>
        <div className={classes.dataContainer}>
          {transformedData?.map((data) => (
            <div className={classes.row}>
              <Text className={classes.rowHeader}>{data[0]}</Text>
              <Text className={classes.rowContent}>{data[1]}</Text>
            </div>
          ))}
        </div>
        <section className={classes.logoWrapper}>
          <div className={classes.logo}>Logo</div>
        </section>
      </div>
    </div>
  );
}

const investorDataPageStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    boxSizing: "border-box",
    width: "100%",
    height: "max-content",
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  content: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  dataContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 3,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  rowHeader: {
    minWidth: 200,
    backgroundColor: ColorPalette.blue1,
    color: ColorPalette.white,
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      minWidth: 120,
    },
  },
  rowContent: {
    minWidth: 400,
    width: "100%",
    padding: theme.spacing(1),
    borderBottom: `1px solid ${ColorPalette.black1}`,
  },
  logoWrapper: {
    flex: 1,
    padding: theme.spacing(2),
  },
  logo: {
    backgroundColor: ColorPalette.gray1,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

interface FilterDropDownProps extends FilterProps {
  [x: string]: any;
}

function FilterDropDown(props: FilterDropDownProps) {
  const filterClasses = filterStyles();

  // state
  const [isDropDownActive, setIsDropDownActive] = useState(false);

  // properties
  const title = props.title;
  const filters = props.filters;
  const id = props.id;
  const onAddFilterFunction = props.onAddFilterFunction;

  // functions
  function clickDropDown() {
    setIsDropDownActive(!isDropDownActive);
  }

  return (
    <div className={filterClasses.root}>
      <header
        id={`toggle-header-${id}`}
        className={filterClasses.header}
        onClick={clickDropDown}
      >
        <Text style={{ color: ColorPalette.white }}>
          {title.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()}
        </Text>
        <span>
          {isDropDownActive ? (
            <ArrowDropUp style={{ color: ColorPalette.white }} />
          ) : (
            <ArrowDropDown style={{ color: ColorPalette.white }} />
          )}
        </span>
      </header>
      {isDropDownActive ? (
        <section className={filterClasses.filters}>
          {filters.map((filter: string) => {
            const _filter: SelectedFilter = { filter: filter, title: title };
            return (
              <span
                className={filterClasses.filter}
                onClick={() => onAddFilterFunction(_filter)}
              >
                <Text style={{ color: ColorPalette.white }}>{filter}</Text>
              </span>
            );
          })}
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}
FilterDropDown.defaultProps = {
  id: "1",
  title: "Filter",
  filters: ["none", "none"],
};

const filterStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "relative",
    backgroundColor: ColorPalette.blue1,
    width: "max-content",
    height: "max-content",
    minWidth: 200,
  },
  header: {
    position: "relative",
    zIndex: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1),
    boxSizing: "border-box",
    cursor: "pointer",
  },
  filters: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: ColorPalette.blue1,
    width: "100%",
    padding: theme.spacing(1),
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: theme.spacing(1),
  },
  filter: {
    transition: "ease-out 0.1s",
    width: "100%",
    "&:hover": {
      filter: `brightness(0.5)`,

      borderRight: `2px solid ${ColorPalette.white}`,
    },
    cursor: "pointer",
  },
}));

interface InvestorCardProps {
  model: Investor;
  onClick: VoidFunction;
}

function InvestorCard(props: InvestorCardProps) {
  const classes = investorStyles();

  // init properties
  const model: Investor = props.model;
  const onClick: VoidFunction = props.onClick;

  return (
    <div className={classes.root} onClick={onClick}>
      <HeaderText className={classes.headerText}>{model.name}</HeaderText>
      <section className={classes.more}>more {">>>"}</section>
    </div>
  );
}

const investorStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: 120,
    minWidth: 160,
    width: "max-content",
    backgroundColor: ColorPalette.blue3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxSizing: "border-box",
    padding: `${theme.spacing(4)}px ${theme.spacing(1)}px ${theme.spacing(
      2
    )}px ${theme.spacing(1)}px`,
    transition: "ease-in 0.04s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
    },
    "&:active": {
      filter: "brightness(0.5)",
    },
  },
  headerText: {
    fontSize: "16pt",
  },
  more: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
}));
