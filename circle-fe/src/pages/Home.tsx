import { GridItem } from "@chakra-ui/react"
import Thread from "@/assets/components/Thread"
import ThreadForm from "@/assets/components/ThreadForm"
import { useState, useEffect } from "react"
import { ThreadType } from "@/types/ThreadType"
import { API } from "@/config/Api"
import { useParams } from "react-router-dom"

function Home() {
  const [thread, setThread] = useState<ThreadType[]>([])
  const params = useParams()

  const getThread = async () => {
    const res = await API.get("/thread")
    setThread(res.data)
  }



  useEffect(() => {
    getThread()
  }, [])

  return (
    <>
      <GridItem px={6} py={4} overflow="auto">
        <ThreadForm  getThread={getThread}/>
        {thread.map((e: ThreadType) => (
          <Thread
            key={e.id}
            id={e.id}
            content={e.content}
            image={e.image}
            isImage={e.isImage}
            users={e.users}
            created_at={e.created_at}
            updated_at={e.updated_at}
          />
        ))}
      </GridItem>
    </>
  )
}

export default Home
