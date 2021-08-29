import React, { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import useStyles from "../../../stylesHook";
import Slide from "@material-ui/core/Slide";
import { LoginForm } from "../LoginForm";
import { RegisterForm } from "../RegisterForm";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { uiActions } from "../../../store/ui-slice";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const checked = useAppSelector((state) => state.ui.slideInTab);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    dispatch(uiActions.toggleTabSlide());
    return () => {
      dispatch(uiActions.toggleTabSlide());
    };
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <>
      <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
        <div className={classes.tabsRoot}>
          <div className={classes.tabsContainer}>
            <AppBar position="static" color="inherit">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
                centered
              >
                <Tab label="Sign In" value={0} {...a11yProps(0)} />
                <Tab label="Sign Up" value={1} {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={0} index={0} dir={theme.direction}>
                <LoginForm />
              </TabPanel>
              <TabPanel value={1} index={1} dir={theme.direction}>
                <RegisterForm />
              </TabPanel>
            </SwipeableViews>
          </div>
        </div>
      </Slide>
    </>
  );
}
