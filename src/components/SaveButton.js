import React, { Component } from "react";
import { Button, Icon} from "semantic-ui-react";

class SaveButton extends Component {
    state = {}
    handleAdd = () =>
    this.setState((prevState) => ({ active: !prevState.active }))

    render() {
    const { active } = this.state

    return (
        <>
        <div class='cart_button'>
            <Button toggle active={active} onClick={this.handleAdd} animated='vertical' floated='right'>
                <Button.Content hidden>Fav</Button.Content>
                <Button.Content visible>
                <Icon name='star' />
                </Button.Content>
            </Button>
        </div>
        </>
    )
    }
}



export default SaveButton