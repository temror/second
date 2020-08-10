import Person from "./Person";
import {connect} from "react-redux";

let mapStateToProps = (state) =>
{
    return {
        person: state.profile.person

    }
}
let mapDispatchToProps = (dispatch) =>
{

}
let PersonContainer = connect(mapStateToProps,mapDispatchToProps)(Person)

export default PersonContainer