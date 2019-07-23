import React from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// these styles override Tabs internal css: https://material-ui.com/api/tabs#css
const AntTabs = withStyles({
  root: {
    borderBottom: 'none',
  },
  indicator: {
    backgroundColor: '#2C90EE',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
})(Tabs);

// these styles override Tab internal css: https://material-ui.com/api/tab#css
const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      minWidth: 90,
      fontSize: 14,
      opacity: 0.6,
      fontWeight: theme.typography.fontWeightMedium,
      marginRight: theme.spacing(4),
      fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#2F343A',
        opacity: 1,
      },
      '&$selected': {
        color: '#2F343A',
        fontWeight: theme.typography.fontWeightBold,
      },
      '&:focus': {
        color: '#2F343A',
      },
    },
    selected: {},
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}

// these are not important, just helpful for the demo
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <div className={classes.demo}>
        <AntTabs value={value} onChange={handleChange} aria-label="Ant example">
          <AntTab label="INCOMPLETE" />
          <AntTab label="COMPLETED" />
        </AntTabs>
      </div>
    </div>
  );
}