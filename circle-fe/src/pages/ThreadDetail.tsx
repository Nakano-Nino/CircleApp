import { GridItem } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { RepliesType, ThreadType } from "@/types/ThreadType"
import ThreadsDetail from "@/assets/components/ThreadDetail"
import { API } from "@/config/Api"
import ReplyForm from "@/assets/components/ReplyForm"
import Replies from "@/assets/components/Replies"

function ThreadDetail() {
  const [thread, setThread] = useState<ThreadType>()
  const [reply, setReply] = useState<RepliesType[]>()

  const params = useParams()
  const getThread = async () => {
    const res = await API.get("/thread/" + params.id)
    setThread(res.data)
  }

  const getReplies = async () => {
    const res = await API.get("/replies/" + params.id)
    setReply(res.data)
  }

  useEffect(() => {
    getThread()
    getReplies()
  },[])
  
console.log(reply);


  return (
    <>
      <GridItem px={6} py={4} overflow="auto">
        {thread != undefined &&  
        <ThreadsDetail 
            {...thread}
        />
        }
        <ReplyForm getReplies={getReplies} />
        {reply &&
        reply.map((r: RepliesType) => (
          <Replies
          {...r}
      /> 
        ))
        }
      </GridItem>
    </>
  )
}

export default ThreadDetail
