import React from 'react';
import Footer from '../component/Footer';
import { create } from 'react-test-renderer';

describe('SnapShot Test', () => {
    test('Test Footer Component ', () => {
        let tree = create(<Footer/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})
