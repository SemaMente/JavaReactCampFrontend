import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/83172170?v=4"/>
           <Dropdown pointing="top left" text="Sema" >
              <Dropdown.Menu>
                 <Dropdown.Item text= "Bilgilerim" icon="info"/>
                 <Dropdown.Item onClick = {props.signOut} text= "Çıkış Yap" icon="sign-out"/>
              </Dropdown.Menu>
          </Dropdown>
          </Menu.Item>
        </div>
    )
}
