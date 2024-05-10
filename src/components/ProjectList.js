import React, {Component} from "react";
import images from './imagesLinks.json';

export class ProjectList extends Component {
    render() {
        const selectedState = this.props.selectedState;
        const img = images;

        const filteredImages = selectedState === "All" ? img : img?.filter(item => item.category === selectedState);
        console.log(selectedState)
        return (
            <div className="images-block">
                {filteredImages?.map((item, index) => (
                    <img key={index} src={item.img} category={item.category} alt={index} />
                ))}
            </div>
        )
    }
}