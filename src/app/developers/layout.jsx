import Sidebar from "@/components/Sidebar";


const DevelopersLayout = ({children}) => {
    return (
        <div>
            <Sidebar/>
            <h1>This is Developers Layout</h1>
            {children}
        </div>
    );
};

export default DevelopersLayout;