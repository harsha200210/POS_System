export let setAlert = (type,content) => {
    switch (type) {
        case 'success':
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: content,
                showConfirmButton: false,
                timer: 1500
            });
            break;
        case 'error':
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: content,
                showConfirmButton: false,
                timer: 1500
            });
    }
}