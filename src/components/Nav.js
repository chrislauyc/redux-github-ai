//this component is used to build the navigation bar
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import React, { useState, useEffect, useRef } from "react";
import { TimelineLite } from "gsap";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Nav() {
  const classes = useStyles();
  const [state, setState] = useState({ left: false });
  // set up animation variables
  let nav = useRef(null);
  //set up timeline
  const timeline = new TimelineLite();

  useEffect(() => {
    //set up the animation
    timeline.from(nav, 1.75, {
      opacity: 0,
      y: -100,
      backgroundColor: '#222',
    })
      .to(nav, 1.75, {
        opacity: 1,
        y: 0,
        backgroundColor: 'white'
      })
  }, []);// eslint-disable-line


  const handleDrawerOpen = () => {
    setState({ left: true });
  };
  const handleDrawerClose = () => {
    setState({ left: false });
  };

  return (
    <>
      <AppBar
        color="primary"
        style={{
          height: "auto",
          backgroundColor: "#FAFAFA",
          width: "100vw",
        }}
        ref={(el) => (nav = el)}
      >
        <div className={'flex flex-row'}>
          <Button onClick={handleDrawerOpen}>
            <MenuIcon className={" ml-10"} />
          </Button>

          <Link to="/">
            <h1 className={" my-6 ml-6 text-black text-4xl"}>Grubspace</h1>
          </Link>
        </div>
      </AppBar>
      <Drawer
        color="primary"
        open={state.left}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.fullList,
        }}
      >
        <List className={classes.list}>
          <ListItem button>
            <ListItemIcon>
            <EmojiPeopleIcon />
            </ListItemIcon>
            <Link to={"about"} onClick={handleDrawerClose}>
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
             <LibraryBooksIcon />
            </ListItemIcon>
            <Link to={"chef"} onClick={handleDrawerClose}>
              <ListItemText primary="The Chef Spot" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
             <LocalDiningIcon />
            </ListItemIcon>
            <Link to={"recipes"} onClick={handleDrawerClose}>
              <ListItemText primary="Recipe Box" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
            <LocalGroceryStoreIcon />
            </ListItemIcon>
            <Link to={"nutrition"} onClick={handleDrawerClose}>
              <ListItemText primary="Nutrition Corner" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
            <LocalBarIcon/>
            </ListItemIcon>
            <Link to={"cocktails"} onClick={handleDrawerClose}>
              <ListItemText primary="Wine Source" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
