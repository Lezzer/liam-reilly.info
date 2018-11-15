import React from 'react';
import { shallow } from 'enzyme';
import Update from "../../../../src/components/Home/Update/update";
import '../../../setup';

describe('the update component renders as expected', () => {

    const wrapper = shallow(<Update 
        month={"May"} 
        day={"22"} 
        title={"liam-reilly.info is born!"} 
        content={[
            "Some sample content"
        ]}
    />);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));
    
});