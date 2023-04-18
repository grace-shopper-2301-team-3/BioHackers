import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded'
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded'
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded'
import DiscountRoundedIcon from '@mui/icons-material/DiscountRounded'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const AdminSidebar = () => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem button component={Link} to="/admin/home">
          <ListItemIcon>{HomeRoundedIcon}</ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/admin/dashboard">
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <ListItemIcon>{InsightsRoundedIcon}</ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/admin/orders">
          <ListItemIcon>{MonetizationOnRoundedIcon}</ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={Link} to="/admin/products">
          <ListItemIcon>{Inventory2RoundedIcon}</ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component={Link} to="/admin/users">
          <ListItemIcon>{AccountCircleRoundedIcon}</ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/admin/payment-options">
          <ListItemIcon>{CreditCardRoundedIcon}</ListItemIcon>
          <ListItemText primary="Payment Options" />
        </ListItem>
        <ListItem button component={Link} to="/admin/discounts">
          <ListItemIcon>{DiscountRoundedIcon}</ListItemIcon>
          <ListItemText primary="Discounts" />
        </ListItem>
      </List>
    </Drawer>
  )
}

const AdminLayout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AdminSidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

export default AdminLayout