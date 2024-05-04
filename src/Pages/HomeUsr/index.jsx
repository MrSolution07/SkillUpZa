/**
well this is the LoginUsr
 */
import { Input, Avatar, Button, Popover } from "@mui/material";
import { useState } from "react";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NetworkIcon from '@mui/icons-material/NetworkCheck';
import BriefcaseIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import SignalIcon from '@mui/icons-material/SignalCellularAlt';
import ImageIcon from '@mui/icons-material/Image';
import VideoIcon from '@mui/icons-material/VideoCall';
import CalendarDaysIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Article';
import ThumbsUpIcon from '@mui/icons-material/ThumbUpAlt';
import TextIcon from '@mui/icons-material/Textsms';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/system';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(4),
}));

function UserLog() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", backgroundColor: "white", padding: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link to="#" style={{ display: "flex", alignItems: "center" }}>
            <img
              alt="SkillUP"
              height={32}
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width={32}
            />
            <span style={{ visibility: "hidden" }}>SkillUP</span>
          </Link>
          <div style={{ position: "relative", width: "100%", maxWidth: "md" }}>
            <SearchIcon style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "gray" }} />
            <Input
              style={{ width: "100%", borderRadius: "9999px", backgroundColor: "rgba(0, 0, 0, 0.05)", padding: "0.5rem 2rem", fontSize: "0.875rem", border: "none", outline: "none" }}
              placeholder="Search"
              type="search"
            />
          </div>
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Link to="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "gray", textDecoration: "none", transition: "color 0.3s" }}>
            <HomeIcon style={{ width: "1.5rem", height: "1.5rem" }} />
            <span style={{ fontSize: "0.75rem" }}>Home</span>
          </Link>
          <Link to="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "gray", textDecoration: "none", transition: "color 0.3s" }}>
            <NetworkIcon style={{ width: "1.5rem", height: "1.5rem" }} />
            <span style={{ fontSize: "0.75rem" }}>My Network</span>
          </Link>
          <Link to="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "gray", textDecoration: "none", transition: "color 0.3s" }}>
            <BriefcaseIcon style={{ width: "1.5rem", height: "1.5rem" }} />
            <span style={{ fontSize: "0.75rem" }}>Jobs</span>
          </Link>
          <Link to="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "gray", textDecoration: "none", transition: "color 0.3s" }}>
            <SchoolIcon style={{ width: "1.5rem", height: "1.5rem" }} />
            <span style={{ fontSize: "0.75rem" }}>My Courses</span>
          </Link>
          <Link to="#" style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "gray", textDecoration: "none", transition: "color 0.3s" }}>
            <SignalIcon style={{ width: "1.5rem", height: "1.5rem" }} />
            <span style={{ fontSize: "0.75rem" }}>Courses</span>
          </Link>
          <Button onClick={handleClick}>
            <StyledAvatar>
              <img alt="@shadcn" src="/placeholder-avatar.jpg" />
            </StyledAvatar>
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <div style={{ padding: "1rem" }}>
              <div>My Profile</div>
              <div>Settings</div>
              <div>Sign Out</div>
            </div>
          </Popover>
        </nav>
      </header>
      <div style={{ flex: 1, padding: "1.5rem" }}>
        <div style={{ gap: "1.5rem" }}>
          <div style={{ borderRadius: "0.5rem", backgroundColor: "white", padding: "1rem", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <StyledAvatar>
                <img alt="@shadcn" src="/placeholder-avatar.jpg" />
              </StyledAvatar>
              <Input
                style={{ flex: 1, borderRadius: "9999px", backgroundColor: "rgba(0, 0, 0, 0.05)", padding: "0.5rem 1rem", fontSize: "0.875rem", border: "none", outline: "none" }}
                placeholder="What's on your mind?"
                type="text"
              />
            </div>
            <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between" }}>
              <StyledButton variant="text" size="small">
                <ImageIcon style={{ marginRight: "0.5rem" }} />
                Photo
              </StyledButton>
              <StyledButton variant="text" size="small">
                <VideoIcon style={{ marginRight: "0.5rem" }} />
                Video
              </StyledButton>
              <StyledButton variant="text" size="small">
                <CalendarDaysIcon style={{ marginRight: "0.5rem" }} />
                Event
              </StyledButton>
              <StyledButton variant="text" size="small">
                <NewspaperIcon style={{ marginRight: "0.5rem" }} />
                Article
              </StyledButton>
            </div>
          </div>
          {/* Repeated elements */}
        </div>
      </div>
    </div>
  );
}

export default UserLog;
