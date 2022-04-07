
import PropTypes from "prop-types";
import {Li, Button} from './ContactList.styled'


const ContactList =  ({visible, onDelete})=>{
    return(
        <div>
                <ul>
       {visible.map(({id, name, number}) => <Li
         key={id}>
      {name}: {number}
      <Button type="button" onClick={()=>onDelete(id)}>Delete</Button>
  </Li>)}

</ul>
</div>
    )
}

ContactList.propTypes={
    visible: PropTypes.array.isRequired,
    onDelete: PropTypes.func
}
export default ContactList