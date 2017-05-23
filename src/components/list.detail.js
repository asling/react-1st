import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { fetchListDetail } from '../actions/getDatas.actions';


class ListDetailView extends Component{
	constructor(props){
		super(props);
		const { dispatch } = this.props;
		this.dispatch = dispatch;
		const detail = props.match.params.detail;
		console.log("detail:"+detail);
		this.dispatch(fetchListDetail(detail));
	}

	componentWillReceiveProps(nextProps){
		const nextDetail = nextProps.match.params.detail;
		console.log("nextDetail:"+nextDetail);
		this.dispatch(fetchListDetail(nextDetail));
	}

	render(){
		const { listDetail } = this.props;
		console.log(listDetail);
		return(
			<div>
				<div>what you wanna search: {listDetail.term}</div>
				<h2>{listDetail.title}</h2>
				<p>{listDetail.content}</p>
			</div>
		)
	}
}

var mapStateToProps = state => ({
	listDetail: state.listDetail,
});

const ListDetailContainer = connect(mapStateToProps)(ListDetailView);
export default ListDetailContainer;