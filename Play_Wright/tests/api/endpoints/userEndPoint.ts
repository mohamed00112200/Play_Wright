async function getUsers(request : any) {
    const response = request.get("https://httpbin.org/get");
    return response;
}
export default{ getUsers };