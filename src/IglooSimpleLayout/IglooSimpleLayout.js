import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IglooSideNavigation from '../IglooSideNavigation/IglooSideNavigation'
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import IglooHeader from '../IglooHeader/IglooHeader'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '667px',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function IglooSimpleLayout(props) {

  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }

return (
    <div className={classes.root}>  
      <IglooHeader menus={props.menus} accountMenu={props.accountMenu} hasAccountIcon={props.hasAccountIcon}/>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </div>
    </div>
  );
}
IglooSimpleLayout.propTypes = {
  children: PropTypes.node,
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  ),
  hasAccountIcon: PropTypes.bool,
  accountMenu: PropTypes.array,
};
IglooSimpleLayout.defaultProps = {
  menus: [
    {
      label: 'Marketing',
      children: [
        {
          label: 'Branding',
          children: [
            {
              label: 'Brochures',
            },
            {
              label: 'Business Cards',
            },
            {
              label: 'Logos',
            },
          ],
        },
        {
          label: 'Variable Printing',
          children: [
            {
              label: 'Igen',
            },
            {
              label: '1-to-1',
            },
          ],
        },
        {
          label: 'Loyalty',
        },
        {
          label: 'Social Media',
        },
      ],
    },
    { label: 'Data Solutions', icon: 'data_usage' },
    { label: 'Technology', icon: 'widgets' },
    { label: 'Labeling & Packaging', icon: 'bookmark' },
  ],
  hasAccountIcon: true,
  accountMenu: [
    { label: "Favorites", icon: "favorite" },
    { label: "Orders", icon: "receipt", hasDivider: "true" },
    { label: "Logout" }
  ]
};
export default IglooSimpleLayout;