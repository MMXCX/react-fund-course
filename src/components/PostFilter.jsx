import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFiler}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFiler({...filter, query: e.target.value})}
                placeholder={'Find...'}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFiler({...filter, sort: selectedSort})}
                defaultValue={'Sorting by'}
                options={[
                    {value: 'title', name: 'Sort by Title'},
                    {value: 'body', name: 'Sort by Body'}
                ]}
                on
            />
        </div>
    );
};

export default PostFilter;
