import React from 'react';
import { shallow } from 'enzyme';
import Post from "../../../../src/components/Home/Post/post";
import '../../../setup';

describe('the post component renders as expected', () => {

    const wrapper = shallow(<Post 
        month={"May"} 
        day={"22"} 
        title={"liam-reilly.info is born!"} 
        content={[
            "Some sample content"
        ]}
    />);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));

});