import type { DocumentData } from 'firebase/firestore'

import { FirebaseError } from 'firebase/app'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { FiEdit3 } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'

import { useAuthContext } from '../../context/AuthContext'
import { firebaseDb } from '../../lib/firebase'
import { ProfileArticles } from './profileArticles/profileArticles'

import '../../styles/user-profile.css'

type Params = {
  profileID: string | undefined
}

export default function Profile() {
  const { user } = useAuthContext()
  const { profileID } = useParams<Params>()
  const [data, setData] = useState<DocumentData | undefined>(undefined)

  useEffect(() => {
    const getDocument = async () => {
      try {
        const usersCollectionReference = doc(firebaseDb, `users/${profileID}`)
        const docSnap = await getDoc(usersCollectionReference)

        if (docSnap.exists()) {
          setData(docSnap.data())
        } else {
          setData(undefined)
          console.log('No document!')
        }
      } catch (error) {
        if (error instanceof FirebaseError) console.log(error)
      }
    }
    return () => {
      getDocument()
    }
  }, [])

  return (
    <>
      {data && (
        <div className="user-profile">
          <div className="user">
            <div className="user__wrapper">
              <div className="user__wrapper--primary">
                <img src={data.avatarUrl} alt="user" />
                <p>@{data.username}</p>
              </div>
              <div className="user__wrapper--secondary">
                <p>{data.fullname}</p>
                <p>{data.location}</p>
                <p>{data.bio}</p>
              </div>
            </div>

            {user?.uid === data.uid && (
              <Link
                className="edit-button"
                to={`/edit/${user?.uid}`}
                aria-label="Edit your profile"
              >
                <FiEdit3 className="pen" />
                Edit
              </Link>
            )}
          </div>

          <ProfileArticles
            profileID={profileID}
            username={data.username}
            id={data.uid}
          />
        </div>
      )}
    </>
  )
}
