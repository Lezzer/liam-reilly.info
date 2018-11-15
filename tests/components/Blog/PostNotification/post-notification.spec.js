import React from 'react';
import { shallow } from 'enzyme';
import PostNotification from "../../../../src/components/Blog/PostNotification/post-notification";
import '../../../setup';

describe('the post component renders as expected', () => {

    const wrapper = shallow(<PostNotification
        month={"Nov"}
        day={"15"}
        title={"liam-reilly.info is born!"}
        content={[
            "Some sample content"
        ]}
        link={"/blog/something.md"}
    />);


    it('renders without crashing', () => expect(wrapper.length).toBe(1));

});