import{Link, useParams} from 'react-router-dom';
import { useState , useEffect } from 'react'
function Single(){
	var myparma = useParams();
	var myid = myparma.id;
	const [post , setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://webeetec.com/itsharks24/blog/api/singlepost.php?id='+myid)
        .then(res => res.json())
        .then(( r ) => {
			setPosts(r[0])
            console.log(r[0]);
        })
    } , [myid]);
	return(

		<section className="container">
			<div className="wrapper clear">
				<div className="contentLeft">
					<div className="singlePostMeta">
						<div className="singlePostTime"> {post.date} </div>
						<h1> {post.title} </h1>
						<Link to={'/category/' + post.category} className="singlePostCategory">{post.category}</Link>
					<div className="singlePostWrap">
						<div className="singlePostImg">
							<img src={'https://webeetec.com/itsharks24/blog/admin/'+ post.image} alt="Francoise img"/>
						</div>
						<p>{post.description}</p>
					</div>
				
					</div>
				<div className="sidebarRight">
					<div className="sidebar-widget">
						<h3>About us</h3>
						<div className="aboutMeWidget">
							<img src="/images/ourlogo.png" alt="Francoise img"/>
							<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
						</div>
					</div>
					{/* <Recent />				 */}
				</div>
			</div>
			</div>
			<div className="clear"></div>
			
		</section>
		
	)
		
	}

export default Single;
