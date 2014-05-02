var receiver = require("../mypeople/receiver");
// 공통 명령어(권장)
// 시작		start	:  중지 상태인 봇을 재개 합니다.
// 끝		stop	:  봇을 잠시 중지 시킵니다.
// 퇴장		exit	:  그룹대화에서 봇을 퇴장 시킵니다. 단 1:1 대화에서 동작하지 않습니다.
// 도움말	help	:  봇 사용 방법을 보여줍니다.


exports.callback = function(req, res, options){

	var params = eval(req.body);

	// 파라미터 출력
	console.log('\nPOST /callback\n',params,'\n');

	// 그룹방
	if(params["groupId"]){
		if(params["content"] === "퇴장" || params["content"] === "exit") {
			receiver.exitBot(params["groupId"]);
//		}else if(params["content"] === "테스트") {
//			receiver.groupTest(params["groupId"], params["buddyId"], params["content"], '[{"name":"초대자"}]');
//		}else if(params["content"] === "그룹목록") {			
//			receiver.getMembers(params["groupId"]);
//		}else if(params["action"] === "addBuddy") {
//			receiver.addBuddy(params["buddyId"]);
//		}else if(params["action"] === "sendFromMessage") {
//			receiver.sendFromMessage(params["groupId"], params["buddyId"], params["content"]);
		}else if(params["action"] === "sendFromGroup") {
			receiver.sendFromGroup(params["groupId"], params["content"]);
		}else if(params["action"] === "createGroup") {
			receiver.createGroup(params["groupId"], params["buddyId"]);
		}else if(params["action"] === "inviteToGroup") {
			receiver.createGroup(params["groupId"],params["buddyId"]);			
//receiver.inviteToGroup(params["groupId"], params["buddyId"], params["content"]);
//		}else if(params["action"] === "exitFromGroup") {
//			receiver.exitFromGroup(params["groupId"], params["buddyId"]);
		}
	}

	// 개인방
	if(!params["groupId"]){

//		if(params["content"] === "테스트") {
//			receiver.buddyTest(params["buddyId"], params["content"]);
//		}else if(params["content"] === "이미지") {
//			receiver.sendFromImage(params["buddyId"]);
//		}else if(params["content"] === "프로필이미지") {
//			receiver.profileDownload(params["buddyId"]);
		if(params["action"] === "addBuddy") {
			receiver.addBuddy(params["buddyId"]);
		}else if(params["action"] === "sendFromMessage") {
			receiver.sendFromMessage(params["buddyId"], params["content"]);
		}
	}

	res.end();
};
