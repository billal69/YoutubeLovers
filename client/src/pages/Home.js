import React, { useContext } from 'react';
import Log from '../components/Log';
import { UidContext } from '../components/AppContext';
import LeftNav from '../components/LeftNav';
import NewPostForm from '../components/Post/NewPostForm';
import Thread from '../components/Thread';

export default function Home() {
  const uid=useContext(UidContext)
  return (
    <div className="home">
      <LeftNav/>
      <div className="main">
        <div className="home-header">
        {uid ? <NewPostForm /> : <Log signin={true} signup={false} />}
        </div>
        <Thread/>
      </div>

    </div>
  );
};
