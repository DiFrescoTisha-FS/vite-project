import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="bio" onClick={toggle}>Bio</SidebarLink>
                    <SidebarLink to="music" onClick={toggle}>Music</SidebarLink>
                    <SidebarLink to="new" onClick={toggle}>New</SidebarLink>
                    <SidebarLink to="thoughts" onClick={toggle}>Thoughts</SidebarLink>
                </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/home" onClick={toggle}>Home</SidebarRoute>
                    </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;