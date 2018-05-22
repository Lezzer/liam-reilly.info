import React from 'react';
import { shallow } from 'enzyme';
import '../tests/setup';
import NewBlogPost from "../src/new-blog-post";

describe('the new blog post component renders as expected', () => {

    const wrapper = shallow(<NewBlogPost 
        month={"May"} 
        day={"22"} 
        title={"liam-reilly.info is born!"} 
        content={[
            "Some sample content"
        ]}
    />);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));

});