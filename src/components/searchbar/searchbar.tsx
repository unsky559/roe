import * as React from "react";

type propsType = {}
type stateType = {
    searchValue: string
}

export default class Searchbar extends React.Component <propsType, stateType> {

    constructor(props: propsType, state: stateType){
        super(props, state);
        this.state = {
            searchValue: localStorage.getItem("searchVal") || null,
        }
        this.change = this.change.bind(this);
    }

    componentWillUnmount(): void {
        //save to DB
        localStorage.setItem("searchVal", this.state.searchValue);
    }

    change(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({searchValue: e.target.value});
    }

    render () {
        return (
            <>
                <input 
                    className="searchbar" 
                    placeholder="Search..." 
                    type="search"
                    defaultValue={this.state.searchValue}
                    onChange={this.change}
                />
                <button>Search</button>
            </>
        );
    }
}