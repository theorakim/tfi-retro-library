// Gallery functionality with Firebase Storage
// Requires: firebase-app.js, firebase-storage.js from CDN

let storage = null;
let currentRetroId = null;

// 비밀번호 (실제로는 환경변수나 서버에서 관리하는 게 좋지만, 간단히 하기 위해)
const UPLOAD_PASSWORD = "tfi2026";

// Firebase 초기화
function initFirebase() {
    if (typeof firebase === 'undefined') {
        console.error('Firebase SDK not loaded');
        return false;
    }

    try {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        storage = firebase.storage();
        return true;
    } catch (error) {
        console.error('Firebase initialization error:', error);
        return false;
    }
}

// 갤러리 모달 열기
function openGallery(retroId) {
    currentRetroId = retroId;

    if (!initFirebase()) {
        alert('갤러리를 불러올 수 없습니다. 페이지를 새로고침해주세요.');
        return;
    }

    const modal = document.getElementById('galleryModal');
    modal.style.display = 'flex';

    loadGalleryImages(retroId);
}

// 갤러리 모달 닫기
function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
}

// 이미지 업로드 모달 열기
function openUploadModal() {
    const password = prompt('업로드 비밀번호를 입력하세요:');

    if (password !== UPLOAD_PASSWORD) {
        alert('비밀번호가 틀렸습니다.');
        return;
    }

    const uploadSection = document.getElementById('uploadSection');
    uploadSection.style.display = 'block';
}

// 이미지 압축
async function compressImage(file, maxWidth = 1920, maxHeight = 1080, quality = 0.85) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;

                // 비율 유지하면서 리사이즈
                if (width > maxWidth || height > maxHeight) {
                    const ratio = Math.min(maxWidth / width, maxHeight / height);
                    width *= ratio;
                    height *= ratio;
                }

                canvas.width = width;
                canvas.height = height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob((blob) => {
                    resolve(blob);
                }, 'image/jpeg', quality);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

// 이미지 업로드
async function uploadImages() {
    const fileInput = document.getElementById('imageInput');
    const files = fileInput.files;

    if (files.length === 0) {
        alert('이미지를 선택해주세요.');
        return;
    }

    const uploadBtn = document.querySelector('#uploadSection button');
    uploadBtn.disabled = true;
    uploadBtn.textContent = '업로드 중...';

    try {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            // 이미지 압축
            const compressedBlob = await compressImage(file);

            // Firebase Storage에 업로드
            const timestamp = Date.now();
            const fileName = `${timestamp}_${i}.jpg`;
            const storageRef = storage.ref(`retros/${currentRetroId}/${fileName}`);

            await storageRef.put(compressedBlob);

            console.log(`Uploaded: ${fileName}`);
        }

        alert('업로드 완료!');
        fileInput.value = '';
        document.getElementById('uploadSection').style.display = 'none';

        // 갤러리 새로고침
        loadGalleryImages(currentRetroId);

    } catch (error) {
        console.error('Upload error:', error);
        alert('업로드 실패: ' + error.message);
    } finally {
        uploadBtn.disabled = false;
        uploadBtn.textContent = '업로드';
    }
}

// 갤러리 이미지 로드
async function loadGalleryImages(retroId) {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">이미지 로딩 중...</p>';

    try {
        const storageRef = storage.ref(`retros/${retroId}`);
        const result = await storageRef.listAll();

        if (result.items.length === 0) {
            grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">아직 업로드된 이미지가 없습니다.</p>';
            return;
        }

        grid.innerHTML = '';

        // 이미지 URL 가져오기 및 표시
        for (const item of result.items) {
            const url = await item.getDownloadURL();

            const imgContainer = document.createElement('div');
            imgContainer.className = 'gallery-item';
            imgContainer.onclick = () => viewFullImage(url);

            const img = document.createElement('img');
            img.src = url;
            img.alt = '회고 사진';
            img.loading = 'lazy';

            imgContainer.appendChild(img);
            grid.appendChild(imgContainer);
        }

    } catch (error) {
        console.error('Load images error:', error);
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">이미지를 불러올 수 없습니다.</p>';
    }
}

// 전체 크기 이미지 보기
function viewFullImage(url) {
    const viewer = document.getElementById('imageViewer');
    const fullImage = document.getElementById('fullImage');

    fullImage.src = url;
    viewer.style.display = 'flex';
}

// 이미지 뷰어 닫기
function closeImageViewer() {
    const viewer = document.getElementById('imageViewer');
    viewer.style.display = 'none';
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeGallery();
        closeImageViewer();
    }
});

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
    const galleryModal = document.getElementById('galleryModal');
    const imageViewer = document.getElementById('imageViewer');

    if (event.target === galleryModal) {
        closeGallery();
    }
    if (event.target === imageViewer) {
        closeImageViewer();
    }
};
