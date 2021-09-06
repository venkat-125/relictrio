import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './technologies.css';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

function  Technologies(){
    const useStyles = makeStyles({
        root: {
          flexGrow: 1,
        },
      });

      const classes = useStyles();
      const theme = useTheme();
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
      const handleChangeIndex = (index) => {
        setValue(index);
      };
    
    const Body = styled.h1`
    width:100%;
    height:700px;
    background:#3C50E0;
    z-index:0;
    margin-top:-25px;
    @media only screen and (max-width: 768px) {
     display:none;
    }
  `;

  const Technology = styled.div`
    width:60%;
    margin-left:300px;
    padding:50px 0px;
  `

  const FirstColumn = styled.div`
  max-width: 300px;
  margin: 0px 65px 0;
  text-align: center;
  position: relative;
  `

  const Techheading = styled.h4`
  font-size: 14px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
  font-family:"Gilroy-Bold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
  color:#8da4ff;
  `

  const Subsheading = styled.h4`
  font-size: 32px;
    line-height: 44px;
    text-align: center;
    color: white;
    margin: 15px 0 65px;
    font-weight:400;
  `
  const SubHeading = styled.h3`
  font-size: 14px;
  font-weight:500;
  line-height: 22px;
  text-align: center;
  color:#536083b0;
  `
    return(
      <Body>
     <Technology>
        <div>
            <Techheading>MULTIPLE EXPERTISE</Techheading>
            <Subsheading>Hire developers across technologies</Subsheading>
        </div>
        <div className={classes.root}>
        <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Frontend Design" {...a11yProps(0)} />
          <Tab label="Backend System" {...a11yProps(1)} />
          <Tab label="Mobile App" {...a11yProps(2)} />
          <Tab label="Open Source" {...a11yProps(3)} />
          <Tab label="E-commerce" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}> 
          <div className="table_data">
            <div className="tab_left">
            Front end technology deals with setting up the UI elements along with the functionality of a website. 
            A frontend developer sets up all the interaction that a user has with the website.
            <ul>
                    <li className="details">HTML and CSS</li>
                    <li className="details">CSS Frameworks</li>
                    <li className="details">Javascript</li>
                    <li className="details">Javascript Frameworks</li>
                </ul>
            </div>
            <div className="tab_right">
                <div className="tab_img">
               <img class="uxgmulexpns__technlgsimg" 
               src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/10/css__icon.png?time=1622425898" 
               alt="CSS" />
                <p class="tab_text">CSS</p>
                </div>
                <div className="tab_img">
               <img 
               src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/10/bootstrap__icon.png?time=1622425898" 
               alt="CSS" />
                <p class="tab_text">Bootstrap</p>
                </div>
                <div className="tab_img">
               <img 
               src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/javascript.png?time=1622425898" 
               alt="CSS" />
                <p class="tab_text">Javascript</p>
                </div>
                <div className="tab_img">
               <img 
               src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/10/html__icon.png?time=1622425898" 
               alt="CSS" />
                <p class="tab_text">HTML</p>
                </div>
                <div className="tab_img">
               <img 
               src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/react_icon.png?time=1622425898" 
               alt="CSS" />
                <p class="tab_text">ReactJS</p>
                </div>
                <div className="tab_img">
               <img 
               src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/10/redux__icon.png?time=1622425898" 
               alt="CSS" />
                <p class="tab_text">Redux</p>
                </div>
                <div className="tab_img">
               <img 
               src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/10/angular__icon.png?time=1622425898" 
               alt="CSS" />
                <p class="tab_text">AngularJS</p>
                </div>
                <div className="tab_img">
               <img 
               src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/10/backbone__icon.png?time=1622425898" 
               alt="CSS" />
                <p class="tab_text">BackboneJS</p>
                </div>
               </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        Backend System
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        Mobile App
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        Open Source
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
        E-commerce Platforms
        </TabPanel>
      </SwipeableViews>
        </div>
      </Technology>
    </Body>
    
    )
 }


export default Technologies;