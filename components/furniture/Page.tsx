import {Header} from "./Header";
import {Content} from "./Content";
import {Footer} from "./Footer";
import {Nav} from "./Nav";

export const Page: React.FC = props => <div className='w-full grid gap-2'>
    <Header/>
    <Nav/>
    <Content>{props.children}</Content>
    <Footer/>
</div>;