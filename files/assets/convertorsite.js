// Modal functionality
const modal = document.getElementById('tool-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.getElementsByClassName('close')[0];

function showTool(toolType) {
    modal.style.display = 'block';
    
    switch(toolType) {
        case 'image':
            modalTitle.textContent = 'Image Editor';
            modalBody.innerHTML = `
                <div class="tool-interface">
                    <input type="file" accept="image/*">
                    <div class="tool-controls">
                        <button>Crop</button>
                        <button>Resize</button>
                        <button>Filter</button>
                    </div>
                </div>
            `;
            break;
        case 'video':
            modalTitle.textContent = 'Video Converter';
            modalBody.innerHTMLtool-interface">
                    <input type="file" accept="video/*">
                    <select>
                        <option>MP4</option>
                        <option>WebM</option>
                        <option>AVI</option>
                    </select>
                    <button>Convert</button>
                </div>
            `;
            break;
        case 'gif':
            modalTitle.textContent = 'GIF Maker';
            modalBody.innerHTML = `
                <div class="tool-interface">
                    <input type="file" multiple accept="image/*">
                    <div class="tool-controls">
                        <button>Create GIF</button>
                        <input type="number" placeholder="Frame delay (ms)">
                    </div>
                </div>
            `;
            break;
        case 'compress':
            modalTitle.textContent = 'Media Compressor';
            modalBody.innerHTML = `
                <div class="tool-interface">
                    <input type="file" accept="image/*,video/*">
                    <div class="tool-controls">
                        <input type="range" min="0" max="100" value="50">
                        <span>Quality: 50%</span>
                        <button>Compress</button>
                    </div>
                </div>
            `;
            break;
    }
}

// Close modal when clicking the X button
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Handle quality slider in compress tool
document.addEventListener('input', function(e) {
    if (e.target.type === 'range') {
        e.target.nextElementSibling.textContent = `Quality: ${e.target.value}%`;
    }
});
