export default function LogOut() {
    localStorage.removeItem('auth-token');
    window.location.href = '/Homepage'
}