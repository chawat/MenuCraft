import MainNavigation from './MainNavigation';

function layout(props){
return <div>
    <MainNavigation/>

<main > {props.children}
</main>

</div>
}

export default layout;